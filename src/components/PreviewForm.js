import React from 'react';

export default function PreviewForm({
  data
  //   educationalExperiences,
  //   workExperiences
}) {
  return (
    <section>
      <div className="profile-header">
        <span>
          {data && data.telephone}
          <br />
          {data && data.location}
        </span>
        <h3>
          {data && data.firstname} {data && data.lastname}
        </h3>
        <span>
          <ul>
            {data && <li>{data.email}</li>}
            {data && <li>{data.profileLink}</li>}
          </ul>
        </span>
      </div>

      {/* {educationalExperiences &&
      <h3 className="profile___education___wrapper">Educational Experience</h3>
            educationalExperiences.map((eduExp, i) => (
              <div key={i + 1}>
                <div className="profile-education">
                  <h3>{eduExp.location}</h3>
                  <h3>{eduExp.schoolAttended}</h3>
                  <h3>
                    {eduExp.start} - {eduExp.end}
                  </h3>
                </div>
                <div className="profile___edication___town___program">
                  <ul>
                    <li>
                      {eduExp.studyType} in {eduExp.studyTitle}
                    </li>
                  </ul>
                </div>
              </div>
            ))} */}

      {/* {workExperiences &&
      <h3 className="profile___work___wrapper">Practical Experience</h3>
            workExperiences.map((workExp, i) => (
              <div key={i + 1}>
                <div className="profile-work">
                  <h3>{workExp.positionTitle}</h3>
                  <h3>{workExp.companyName}</h3>
                  <h3>
                    {workExp.startDate} - {workExp.endDate}
                  </h3>
                </div>
                <div>
                  <span>
                    {workExp.location} | {workExp.jobType}
                  </span>
                  <ul>
                    <li>{workExp.jobDescription}</li>
                  </ul>
                </div>
              </div>
            ))} */}
    </section>
  );
}
