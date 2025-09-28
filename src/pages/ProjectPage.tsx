import ProjectCard from '../components/ProjectCard';

const ProjectPage = () => {
  return (
    <div className="border-2 bg-black p-5">
      <div className="container mx-auto">
        <div className="text-white flex justify-around mb-5">
          <button>22기</button>
          <button>21기</button>
          <button>20기</button>
        </div>
        <div className="flex flex-col text-white items-center gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
