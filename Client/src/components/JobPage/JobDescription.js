import "../../CSS/JobPage/JobDescription.css";

export default function JobDescription({ result }) {
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}>Job Description</h2>
      <hr />
      <div className="description-container">
        <h4 className="description-header">Job Summary</h4>
        <p>
          {result.description}
          <br /> <br />
          Dolor, magnam, praesentium repudiandae sint, nobis autem doloribus
          officia necessitatibus aliquam quisquam atque maxime facilis numquam
          reiciendis eum totam quod. Fugiat, veritatis facilis. Excepturi
          incidunt dicta esse doloribus id. Culpa explicabo saepe animi
          consequatur, nobis veniam deserunt iste blanditiis! Tenetur nihil,
          ipsam facilis distinctio deleniti itaque excepturi quod laudantium
          nesciunt qui repudiandae quas! Ratione ab obcaecati sint consectetur
          consequatur similique repellendus qui doloremque cum veritatis
          accusamus ipsum laborum assumenda vero unde sed dolor quas, nisi aut
          rem amet dicta in incidunt. Consectetur, excepturi! Debitis libero,
          molestiae, ipsam iusto minus voluptates esse eveniet et minima
          provident expedita eligendi beatae maiores cumque.
        </p>
      </div>
      <div className="description-container">
        <h4 className="description-header">Responsibilities</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          beatae repudiandae maiores repellat, exercitationem rem facilis nulla
          sunt numquam, id ea, labore consequatur quod voluptate? Molestias ex
          deserunt accusantium natus. Quas nam, fugit officiis reprehenderit eos
          repellat debitis ut dolore dolores molestiae libero ullam quo
          obcaecati ipsam magnam cum praesentium ab non odio odit ad. Dolore
          nihil vero facere in. Blanditiis aliquam ut illo corrupti cumque
          doloremque perspiciatis adipisci autem velit esse nostrum aut dolorem
          animi reprehenderit officia delectus rerum cupiditate nihil quidem
          necessitatibus rem, incidunt ipsum libero? Eum, ut. Nulla distinctio
          amet, facere eveniet fugit nisi! Eveniet reiciendis sint, optio
          impedit odio distinctio dolorum consequatur ut! Quasi nulla culpa ex
          pariatur repudiandae, ad vero at unde, porro, dolore odio! Voluptatem,
          veniam impedit asperiores ex saepe qui similique nobis voluptate,
          laboriosam unde soluta! Cum dolorum animi ex eveniet alias totam,
          veritatis dicta quasi, voluptate voluptatibus doloribus pariatur!
          Aperiam, blanditiis. Optio.
        </p>
      </div>
      <div className="description-container">
        <h4 className="description-header">Qualifications & Skills</h4>
        <ul className="ul-container">
          <li>
            Minimum educational qualifications or specific
            degrees/certifications required for the role
          </li>
          <li>
            Relevant work experience or a certain number of years in a similar
            position
          </li>
          <li>
            Essential skills and competencies needed to perform the job
            effectively, such as communication, problem-solving, technical
            proficiency, leadership, or language proficiency.
          </li>
          <li>
            Industry Knowledge: Familiarity with the industry or specific sector
            related to the job role.
          </li>
          <li>
            Technical Proficiency: Proficiency in specific software, tools, or
            equipment relevant to the job.
          </li>
          <li>
            Excellent verbal and written communication skills, including the
            ability to effectively interact with colleagues, clients, or
            stakeholders.
          </li>
          <li>
            Ability to work well in a team, collaborate with colleagues, and
            contribute to a positive work environment. Strong organizational
            skills and the ability to prioritize tasks and meet deadlines.
          </li>
        </ul>
      </div>
      <div className="description-container">
        <h4 className="description-header">Benefits</h4>
        <ul className="ul-container">
          <li>Pension Scheme: Employer-contributed retirement plan.</li>
          <li>Employee Discounts: Cost-saving perks.</li>
          <li>Flexible Working Options: Work-life balance flexibility.</li>
          <li>Maternity/Paternity Leave: Family-friendly time off.</li>
          <li>Annual Leave: Generous vacation time.</li>
          <li>Professional Development: Skill enhancement opportunities.</li>
          <li>Employee Well-being Programs: Holistic wellness initiatives.</li>
        </ul>
      </div>
      <div className="description-button-container">
        <button>Apply</button>
        <button>Save</button>
      </div>
    </div>
  );
}

// Maternity/Paternity Leave: Family-friendly time off.
// Employee Well-being Programs: Holistic wellness initiatives.
// Employee Discounts: Cost-saving perks.
// Professional Development: Skill enhancement opportunities.
// Employee Recognition: Rewarding exceptional performance.
// Flexible Working Options: Work-life balance flexibility.
