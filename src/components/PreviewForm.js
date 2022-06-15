import React from 'react';

export default function PreviewForm({
  generateResume,
  data
  //   educationalExperiences,
  //   workExperiences
}) {
  return (
    <div>
      {generateResume ? (
        <section>
          <div className="profile-header">
            <span>
              {data.telephone && data.telephone}
              <br />
              {data.location && data.location}
            </span>
            <h3>
              {data.firstname && data.firstname}{' '}
              {data.lastname && data.lastname}
            </h3>
            <span>
              <ul>
                <li>{data.email && data.email}</li>
                <li>{data.profileLink && data.profileLink}</li>
              </ul>
            </span>
          </div>

          <h3 className="profile___education___wrapper">
            Educational Experience
          </h3>
          {/* {educationalExperiences &&
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

          <h3 className="profile___work___wrapper">Practical Experience</h3>
          {/* {workExperiences &&
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
      ) : null}
    </div>
  );
}
