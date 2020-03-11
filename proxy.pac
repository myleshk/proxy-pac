function FindProxyForURL(url, host) {
	PROXY = "SOCKS5 59.36.74.85:1081";

	if (shExpMatch(host, "data.video.iqiyi.com")) {
		return PROXY;
	}
	// Everything else directly!
	return "DIRECT";
}
