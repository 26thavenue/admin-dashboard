import ClipLoader from "react-spinners/ClipLoader";

function PageLoader({ loading, error }: { loading: boolean; error?: boolean }) {
  if (loading) {
    return (
      <div className="h-screen grid place-content-center">
        <ClipLoader
          color={"#ff3793"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <>An Error Occurred</>;
  }
}

export default PageLoader;
