import React, { useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import FullScreenModal from "./FullScreenModal"; // Adjust path
import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="repo-card-div"
        style={{ backgroundColor: theme.highlight, cursor: "pointer" }}
        onClick={() => setModalOpen(true)}
      >
        {/* Your card content here */}
        <div className="repo-name-div">
          <img src={repo?.avatar} alt="Repo Avatar" className="repo-avatar" />
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {repo?.name}
        </p>
        <div className="repo-details">
          {/* <p
            className="repo-creation-date subTitle"
            style={{ color: theme.secondaryText }}
          >
            Created on {repo.createdAt.split("T")[0]}
          </p> */}
          <ProjectLanguages logos={repo.languages} />
        </div>
      </div>

      <FullScreenModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        repo={repo}
        theme={theme}
      />
    </>
  );
}
