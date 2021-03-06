<!DOCTYPE html>
<html>
	<head lang="en">
		<meta charset="UTF-8">
		<title>北京泛网技术信息公司</title>
		<script type="text/javascript" src="client/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="client/js/sprintf.min.js"></script>
		<script type="text/javascript" src="client/js/test.js"></script>
		<link rel="stylesheet" type="text/css" href="client/css/global.css">
		<link rel="stylesheet" type="text/css" href="client/css/stat.css">
	</head>
	<body>
		<div id="header">
			<img id="pannet" src="client/img/logo/Pannet2.png">
			<img id="white" src="client/img/logo/white.png">
			<img id="slogan" src="client/img/logo/slogan.png">
		</div>
		<div id="content">
			<div id="menu">
				<ul>
			<li><a href="gatexstate">查看状态</a></li>
			<li><a href="gatextraffic">查看流量</a></li>
			<li><a href="gatexconfig">站点配置</a></li>
			<li><a href="passwdconfig">修改口令</a></li>
			<li><a href="logout">退出系统</a></li>
				</ul>
			</div>
			<div id="fullState" class="report">
				<table id="state">
					<caption>
						状态监测
					</caption>
					<tr>
						<th rowspan="2">站点名</th>
						<th colspan="4">站间心跳</th>
					</tr>
					<tr>
						<th>主用网络</th>
						<th>备用网络1</th>
						<th>备用网络2</th>
						<th>镜像</th>
					</tr>
				</table>
				<input id="fullScreen" type="button" value="全屏显示"/>
				<input id="mainInterface" type="button" value=""/>
				<input id="backupInterface" type="button" value=""/>
			</div>
		</div>
	</body>
</html>