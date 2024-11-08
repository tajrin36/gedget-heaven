import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p>{ErrorPage.statusText || error.message}</p>
            {
                error.status === 404 && <div className="text-center mt-10 space-y-5">
                    <h3 className="text-3xl font-semibold text-black">404! Page not found</h3>
                    <p className="text-red-500 font-medium">Sorry, an unexpected error has occured.</p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;