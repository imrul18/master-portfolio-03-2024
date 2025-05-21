import React from "react";
import { Fade, Slide } from "react-reveal";
import "./GithubRepoCard.css";

export default function FullScreenModal({ open, onClose, repo, theme }) {
  if (!open) return null;

  return (
    <Fade>
      <div className="modal-overlay" onClick={onClose}>
        <Slide bottom duration={600}>
          <div
            className="modal-content"
            style={{ backgroundColor: theme.highlight }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              &times;
            </button>

            <div className="modal-left" style={{ color: theme.text }}>
              <h2 style={{ lineHeight: 1 }}>{repo?.name}</h2>
              <div className="modal-description-scroll">
                <div dangerouslySetInnerHTML={{ __html: repo?.description }} />
              </div>
            </div>

            <div className="modal-right">
              {repo?.images.map((image, index) => (
                <img
                  key={index}
                  src={image?.imageName}
                  alt={`Screenshot ${index + 1}`}
                  className="modal-image"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing the modal
                    if (e.target.requestFullscreen) {
                      e.target.requestFullscreen();
                    } else if (e.target.webkitRequestFullscreen) {
                      e.target.webkitRequestFullscreen(); // Safari
                    } else if (e.target.msRequestFullscreen) {
                      e.target.msRequestFullscreen(); // IE11
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </Fade>
  );
}
