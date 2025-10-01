import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";

export default function ProjectArchiveGrid_Skeleton() {
  const skeleton = Array.from({ length: 6 });
  return (
    <div className="all-projects-grid">
      {skeleton.map((item, index) => {
        return (
          <Card
            className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root"
            sx={{
              minWidth: `100%`,
              minHeight: "27rem",
              bgcolor: "grey.900",
              opacity: 0.7,
            }}
            key={index}
          >
            <Skeleton
              animation="wave"
              sx={{
                width: `100%`,
                height: "50%",
                bgcolor: "grey.800",
                "&::after": {
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)",
                },
              }}
              variant="rectangular"
            />

            <div className="all-projects_card-text-container">
              <div className="all-projects_card-header">
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{
                    fontSize: "0.8rem",
                    width: "60%",
                    bgcolor: "grey.800",
                    "&::after": {
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                    },
                  }}
                />
                <Skeleton
                  variant="circular"
                  width={30}
                  height={30}
                  animation="wave"
                  sx={{
                    fontSize: "0.8rem",
                    width: "30%",
                    bgcolor: "grey.800",
                    "&::after": {
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                    },
                  }}
                />
                <Skeleton
                  variant="circular"
                  width={30}
                  height={30}
                  animation="wave"
                  sx={{
                    fontSize: "0.8rem",
                    width: "30%",
                    bgcolor: "grey.800",
                    "&::after": {
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                    },
                  }}
                />
              </div>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: "0.8rem",
                  width: "30%",
                  bgcolor: "grey.800",
                  "&::after": {
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                  },
                }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "0.9rem", width: "100%", bgcolor: "grey.800" }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: "0.8rem",
                  width: "100%",
                  bgcolor: "grey.800",
                  "&::after": {
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                  },
                }}
              />{" "}
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: "0.8rem",
                  width: "50%",
                  bgcolor: "grey.800",
                  "&::after": {
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
                  },
                }}
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
