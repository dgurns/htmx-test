export default function index() {
	return `
		<!doctype html>
			<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>HTMX Test</title>
				<script src="https://unpkg.com/htmx.org@1.9.2"></script>
				<script src="https://cdn.tailwindcss.com?plugins=forms"></script>
			</head>
			<body class="p-8 flex flex-col space-y-8 items-start">
				<h1 class="text-3xl font-bold text-green-500" id="title">
					Hello world
				</h1>
				<button hx-post="/clicked" hx-swap="outerHTML">
					Click Me
				</button>
				<form hx-post="/update-title" hx-target="#title" class="flex flex-col space-y-4">
					<input type="text" name="updated-title" placeholder="Pick a new title" required />
					<button type="submit">Update</button>
				</form>
			</body>
		</html>
	`;
}
