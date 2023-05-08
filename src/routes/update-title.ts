export default async function (request: Request) {
	const formData = await request.formData();
	const updatedTitle = formData.get('updated-title');
	return updatedTitle;
}
