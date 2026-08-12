import struct
from .harmony import chord_pitch_classes

def _vlq(n):
    n=int(n); out=[n&0x7F]; n>>=7
    while n:
        out.append((n&0x7F)|0x80); n>>=7
    return bytes(reversed(out))

def write_progression(path,bpm=72,root=0,mode='major',bars=8):
    tpq=480; tempo=int(60_000_000/max(1,bpm)); events=bytearray()
    events += _vlq(0)+bytes([0xFF,0x51,0x03])+tempo.to_bytes(3,'big')
    degrees=[0,3,4,0] if mode=='major' else [0,5,3,4]
    for bar in range(bars):
        pcs=chord_pitch_classes(root,mode,degrees[bar%len(degrees)]); notes=[60+pc for pc in pcs]
        for note in notes: events += _vlq(0)+bytes([0x90,note,76])
        events += _vlq(tpq*4)+bytes([0x80,notes[0],0])
        for note in notes[1:]: events += _vlq(0)+bytes([0x80,note,0])
    events += _vlq(0)+bytes([0xFF,0x2F,0x00])
    track=b'MTrk'+struct.pack('>I',len(events))+events
    header=b'MThd'+struct.pack('>IHHH',6,0,1,tpq)
    with open(path,'wb') as f: f.write(header+track)
    return path
