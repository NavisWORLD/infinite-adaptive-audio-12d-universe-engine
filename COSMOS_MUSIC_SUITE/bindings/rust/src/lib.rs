pub const ABI: &str = "cosmos.synaptic.v1";
pub const STATE_LEN: usize = 12;

#[derive(Clone, Copy, Debug, PartialEq)]
pub struct SynapticInput {
    pub voice_energy:f64,pub pitch_lock:f64,pub phrase_flux:f64,pub tempo_coherence:f64,
    pub motion_energy:f64,pub tilt_x:f64,pub tilt_y:f64,pub rotation_flux:f64,
    pub bpm:f64,pub pulse_stability:f64,pub harmonic_tension:f64,pub dt:f64,
}
impl Default for SynapticInput { fn default()->Self { Self{voice_energy:0.0,pitch_lock:0.0,phrase_flux:0.0,tempo_coherence:0.0,motion_energy:0.0,tilt_x:0.0,tilt_y:0.0,rotation_flux:0.0,bpm:0.0,pulse_stability:0.0,harmonic_tension:0.0,dt:0.05} } }
pub type State=[f64;STATE_LEN];
fn clip(x:f64,lo:f64,hi:f64)->f64{x.max(lo).min(hi)}
pub fn step(p:&State,x:SynapticInput,leak:f64)->State{
 let l=clip(leak,0.0,0.999); let bpm=x.bpm.max(0.0); let dt=x.dt.max(0.0);
 let phase=if bpm>0.0{(p[8]+dt*bpm/60.0)%1.0}else{0.0};
 let t=[clip(x.voice_energy,0.0,1.0),clip(x.pitch_lock,0.0,1.0),clip(x.phrase_flux,0.0,1.0),clip(x.tempo_coherence,0.0,1.0),clip(x.motion_energy,0.0,1.0),clip(x.tilt_x,-1.0,1.0),clip(x.tilt_y,-1.0,1.0),clip(x.rotation_flux,0.0,1.0),phase,clip(x.pulse_stability,0.0,1.0),clip(x.harmonic_tension,0.0,1.0),0.0];
 let mut out=[0.0;STATE_LEN]; for i in 0..11{out[i]=l*p[i]+(1.0-l)*t[i];}
 let sal=(out[0]+out[1]+out[4]+out[9])/4.0; out[11]=l*p[11]+(1.0-l)*(1.5*sal).tanh(); out
}
pub struct Engine{leak:f64,state:State}
impl Engine{pub fn new(leak:f64)->Self{Self{leak:clip(leak,0.0,0.999),state:[0.0;STATE_LEN]}} pub fn state(&self)->&State{&self.state} pub fn reset(&mut self){self.state=[0.0;STATE_LEN];} pub fn update(&mut self,x:SynapticInput)->&State{self.state=step(&self.state,x,self.leak);&self.state}}
