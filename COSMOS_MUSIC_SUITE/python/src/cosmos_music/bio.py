from collections import deque
from statistics import median, pstdev

class BeatTracker:
    def __init__(self, max_beats=12): self.times=deque(maxlen=max_beats)
    def tap(self, timestamp):
        t=float(timestamp)
        if self.times and t-self.times[-1] < 0.25: return self.bpm(), self.stability()
        self.times.append(t); return self.bpm(),self.stability()
    def intervals(self): return [self.times[i]-self.times[i-1] for i in range(1,len(self.times))]
    def bpm(self):
        ints=[x for x in self.intervals() if 0.25<=x<=2.0]
        return 60.0/median(ints) if ints else 0.0
    def stability(self):
        ints=[x for x in self.intervals() if 0.25<=x<=2.0]
        if len(ints)<2: return 0.0
        m=sum(ints)/len(ints); return max(0.0,min(1.0,1-(pstdev(ints)/m if m else 1)))

def pulse_phase(now, last_beat, bpm):
    if bpm<=0: return 0.0
    return ((float(now)-float(last_beat))*bpm/60.0)%1.0
