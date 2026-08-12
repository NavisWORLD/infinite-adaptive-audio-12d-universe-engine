import json
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse
from .state import CSTStateEngine

class Handler(SimpleHTTPRequestHandler):
    engine=CSTStateEngine(); app_dir=Path('.')
    def translate_path(self,path):
        rel=urlparse(path).path.lstrip('/') or 'index.html'
        return str((self.app_dir/rel).resolve())
    def do_POST(self):
        if self.path!='/api/state': self.send_error(404); return
        try:
            n=int(self.headers.get('Content-Length','0')); obj=json.loads(self.rfile.read(n) or b'{}')
            state=self.engine.update(**{k:v for k,v in obj.items() if k in self.engine.update.__code__.co_varnames})
            body=json.dumps(state.mapping()).encode()
            self.send_response(200); self.send_header('Content-Type','application/json'); self.send_header('Access-Control-Allow-Origin','*'); self.send_header('Content-Length',str(len(body))); self.end_headers(); self.wfile.write(body)
        except Exception as e: self.send_error(400,str(e))

def serve(app_dir,port=8080,host='127.0.0.1'):
    Handler.app_dir=Path(app_dir)
    server=ThreadingHTTPServer((host,int(port)),Handler)
    print(f'COSMOS Music on http://{host}:{port}')
    server.serve_forever()
