from pathlib import Path
import sys, plistlib, xml.etree.ElementTree as ET
platform=sys.argv[1] if len(sys.argv)>1 else ''
if platform=='ios':
    p=Path('ios/App/App/Info.plist')
    if p.exists():
        with p.open('rb') as f: data=plistlib.load(f)
        data['NSCameraUsageDescription']='COSMOS Music uses the camera for optional fingertip optical pulse estimation used as an expressive music control.'
        data['NSMicrophoneUsageDescription']='COSMOS Music uses the microphone to analyze your singing and play along locally.'
        data['NSMotionUsageDescription']='COSMOS Music uses device motion as an expressive musical controller.'
        with p.open('wb') as f: plistlib.dump(data,f)
        print('Patched iOS privacy usage descriptions.')
elif platform=='android':
    p=Path('android/app/src/main/AndroidManifest.xml')
    if p.exists():
        ET.register_namespace('android','http://schemas.android.com/apk/res/android')
        tree=ET.parse(p); root=tree.getroot()
        existing={e.attrib.get('{http://schemas.android.com/apk/res/android}name') for e in root.findall('uses-permission')}
        for perm in ['android.permission.CAMERA','android.permission.RECORD_AUDIO','android.permission.VIBRATE']:
            if perm not in existing: ET.SubElement(root,'uses-permission',{'{http://schemas.android.com/apk/res/android}name':perm})
        tree.write(p,encoding='utf-8',xml_declaration=True)
        print('Patched Android camera/microphone permissions.')
else:
    raise SystemExit('usage: patch-native.py ios|android')
