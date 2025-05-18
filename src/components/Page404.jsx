import { Link } from "wouter";

function Page404() {

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="text-center">
				<div className="text-9xl font-extrabold text-gray-800">404</div>
				<div className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</div>
				<div className="text-gray-500 mt-2">The page you're looking for doesn't exist or has been moved.</div>
				<Link
					href="/"
					className="mt-6 inline-block px-6 py-3 bg-slate-500 text-white font-semibold rounded-md shadow-md hover:bg-slate-700 hover:shadow-lg transition duration-200 ease-in-out"
				>
					Go to Homepage
				</Link>
			</div>
		</div>
	);
};

export default Page404;