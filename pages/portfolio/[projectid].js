import { useRouter } from "next/router";

function ProjectPage() {
  const router = useRouter();

  router.pathname;

  return (
    <div>
      <h1>The Project Page</h1>
    </div>
  );
}

export default ProjectPage;
