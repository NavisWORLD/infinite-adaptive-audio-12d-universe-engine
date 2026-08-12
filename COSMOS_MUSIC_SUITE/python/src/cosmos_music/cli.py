import argparse, json
from .state import CSTStateEngine
from .midi import write_progression
from .server import serve
from .pitch import NOTE_NAMES

def main():
    p=argparse.ArgumentParser(prog='cosmos-music'); s=p.add_subparsers(dest='cmd',required=True)
    st=s.add_parser('state')
    for name in ['voice-energy','pitch-lock','phrase-flux','tempo-coherence','motion','tilt-x','tilt-y','rotation-flux','pulse-stability','harmonic-tension']:
        st.add_argument('--'+name,type=float,default=0)
    st.add_argument('--bpm',type=float,default=0)
    md=s.add_parser('midi'); md.add_argument('--out',default='cosmos_demo.mid'); md.add_argument('--bpm',type=float,default=72); md.add_argument('--key',default='C',choices=NOTE_NAMES); md.add_argument('--mode',choices=['major','minor'],default='major'); md.add_argument('--bars',type=int,default=8)
    sv=s.add_parser('serve'); sv.add_argument('--app',default='../app'); sv.add_argument('--port',type=int,default=8080); sv.add_argument('--host',default='127.0.0.1')
    a=p.parse_args()
    if a.cmd=='state':
        e=CSTStateEngine(); d=vars(a); d['motion_energy']=d.pop('motion'); d.pop('cmd'); print(json.dumps(e.update(**{k.replace('-','_'):v for k,v in d.items()}).mapping(),indent=2))
    elif a.cmd=='midi': print(write_progression(a.out,a.bpm,NOTE_NAMES.index(a.key),a.mode,a.bars))
    elif a.cmd=='serve': serve(a.app,a.port,a.host)
if __name__=='__main__': main()
