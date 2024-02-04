import { createHandler } from "@solidjs/start/entry";
import { StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en" class="h-full">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body class="flex min-h-full dark:bg-slate-900 bg-blue-100 overflow-x-hidden custom-scrollbar">
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
