import React from 'react';

import './preview-form.styles.scss';

export default function PreviewForm({
  data,
  educationalDetails,
  workExperienceDetails
}) {
  return (
    <section className="template-preview">
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

      <h3 className="profile___education___wrapper">Educational Experience</h3>
      {educationalDetails &&
        educationalDetails.map((eduExp, i) => (
          <div key={i + 1}>
            <div className="profile-education">
              <h3>{eduExp.location}</h3>
              <h3>{eduExp.schoolAttended}</h3>
              <h3>
                {eduExp.start} - {eduExp.end}
              </h3>
            </div>
            <div className="profile___education___town___program">
              <ul>
                <li>
                  {eduExp.studyType} in {eduExp.studyTitle}
                </li>
              </ul>
            </div>
          </div>
        ))}

      <h3 className="profile___work___wrapper">Practical Experience</h3>
      {workExperienceDetails &&
        workExperienceDetails.map((workExperienceDetail) => (
          <div key={workExperienceDetail.id}>
            <div className="profile-work">
              <h3>{workExperienceDetail.positionTitle}</h3>
              <h3>{workExperienceDetail.companyName}</h3>
              <h3>
                {workExperienceDetail.startDate} -{' '}
                {workExperienceDetail.endDate}
              </h3>
            </div>
            <div>
              <span>
                {workExperienceDetail.location} | {workExperienceDetail.jobType}
              </span>
              <ul>
                <li>{workExperienceDetail.jobDescription}</li>
              </ul>
            </div>
          </div>
        ))}
    </section>
  );
}
