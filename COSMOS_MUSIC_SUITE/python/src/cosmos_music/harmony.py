from .pitch import NOTE_NAMES
MAJOR=[0,2,4,5,7,9,11]; MINOR=[0,2,3,5,7,8,10]
CHORDS_MAJOR=[[0,4,7],[2,5,9],[4,7,11],[5,9,0],[7,11,2],[9,0,4]]
CHORDS_MINOR=[[0,3,7],[2,5,8],[3,7,10],[5,8,0],[7,10,2],[8,0,3]]

def infer_key(pitch_classes, weights=None):
    pcs=list(pitch_classes); weights=list(weights or [1]*len(pcs))
    if not pcs: return 0,'major',0.0
    best=(0,'major',-1.0)
    for root in range(12):
        for mode,scale in [('major',MAJOR),('minor',MINOR)]:
            allowed={(root+i)%12 for i in scale}
            score=sum(w*(1 if int(pc)%12 in allowed else -0.55) for pc,w in zip(pcs,weights))
            if score>best[2]: best=(root,mode,score)
    denom=sum(abs(w) for w in weights) or 1
    return best[0],best[1],max(0.0,min(1.0,(best[2]/denom+0.55)/1.55))

def chord_pitch_classes(root=0, mode='major', degree=0):
    table=CHORDS_MINOR if mode=='minor' else CHORDS_MAJOR
    return [((root+p)%12) for p in table[degree%len(table)]]

def key_name(root, mode): return f"{NOTE_NAMES[root%12]} {mode}"
