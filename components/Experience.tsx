import React from "react";

import { workExperience } from "@/data";
import { Timeline } from "./ui/TimeLine";

const Experience = () => {
    return (
        <div className="py-20 w-full" id="experience">
            <h1 className="heading">
                My <span className="text-purple">work experience</span>
            </h1>

            <div className="w-full">
                <Timeline
                    data={workExperience}
                />
            </div>
        </div>
    );
};

export default Experience;