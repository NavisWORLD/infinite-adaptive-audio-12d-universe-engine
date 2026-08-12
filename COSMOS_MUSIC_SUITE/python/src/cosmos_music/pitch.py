import math
NOTE_NAMES=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']

def hz_to_midi(hz: float):
    if hz <= 0: return None
    return 69 + 12*math.log2(hz/440.0)

def hz_to_note(hz: float):
    m=hz_to_midi(hz)
    if m is None: return None
    n=int(round(m)); return NOTE_NAMES[n%12], n//12-1, n, 100*(m-n)

def estimate_pitch(samples, sample_rate: float, min_hz=70.0, max_hz=1000.0):
    """Simple normalized autocorrelation estimator for mono float samples."""
    x=[float(v) for v in samples]
    if len(x)<32 or sample_rate<=0: return 0.0,0.0
    mean=sum(x)/len(x); x=[v-mean for v in x]
    energy=sum(v*v for v in x)
    if energy<1e-9: return 0.0,0.0
    lo=max(1,int(sample_rate/max_hz)); hi=min(len(x)//2,int(sample_rate/min_hz))
    corrs=[]
    for lag in range(lo,hi+1):
        a=x[:-lag]; b=x[lag:]
        num=sum(u*v for u,v in zip(a,b))
        den=(sum(u*u for u in a)*sum(v*v for v in b))**0.5
        corrs.append(num/den if den else 0.0)
    best=max(corrs) if corrs else -1.0
    if best<0.25: return 0.0,max(0.0,best)
    threshold=max(0.35,best*0.92)
    best_lag=lo+corrs.index(best)
    for i in range(1,len(corrs)-1):
        if corrs[i]>=threshold and corrs[i]>=corrs[i-1] and corrs[i]>=corrs[i+1]:
            best_lag=lo+i; best=corrs[i]; break
    return sample_rate/best_lag,max(0.0,min(1.0,best))
