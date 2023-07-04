import TeamCard from "@app/elements/TeamCard";
import ContainerLayout from "@app/elements/layouts/Container";

interface TeamCardInterface {
  name: string;
  designation: string;
  description: string;
  thumbnailImage: string;
  brands: string[];
}
const TeamSection: React.FC<{
  title: string;
  members: TeamCardInterface[];
}> = ({ title, members }) => {
  return (
    <section className="section team">
      <ContainerLayout>
        <div className="center-layout">
          <h2 className="text-h2">{title}</h2>
        </div>
        <div className="spacer"></div>
        <div className="grid grid-cols-3 gap-10 max-w-5xl m-auto">
          {members?.map((member: any, index: number) => (
            <TeamCard
              key={`team-member-${member.name}`}
              name={member.name}
              description={member.description}
              designation={member.designation}
              thumbnailImage={member.thumbnailImage}
              brands={member.brands}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default TeamSection;
