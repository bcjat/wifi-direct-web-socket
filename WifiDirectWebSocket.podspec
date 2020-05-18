
  Pod::Spec.new do |s|
    s.name = 'WifiDirectWebSocket'
    s.version = '0.0.1'
    s.summary = 'Wifi peer to peer connection using web socket for fast communication between two or more android devices.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/bcjat/wifi-direct-web-socket.git'
    s.author = 'Balvant Jat'
    s.source = { :git => 'https://github.com/bcjat/wifi-direct-web-socket.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end