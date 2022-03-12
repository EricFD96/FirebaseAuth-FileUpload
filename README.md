# FirebaseAuth-FileUpload
Ionic App with Firebase Authentication &amp; File Upload using AngularFire 7 and Capacitor


- ionic g page login | ionic g service services/auth services/avatar
- npm i @capacitor/camera @ionic/pwa-elements
- ng add @angular/fire

On iOS to use Capacitor Camera Plugin:
- Go to: ios/App/App/Info.plist
 Add on the file:
	<key>NSCameraUsageDescription</key>
	<string> insert description </string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string> insert description </string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string> insert description </string>

On Android to use Capacitor Camera Plugin:
- Go to: Android/app/src/main/AndroidManifest.xml
 Add on the file (inside manifest tag):
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>