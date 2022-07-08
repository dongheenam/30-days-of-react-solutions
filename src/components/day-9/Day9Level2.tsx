import React, { useEffect, useState } from "react";
import Button from "../ButtonOld";

type Hemisphere = "south" | "north";
type Season = "winter" | "spring" | "summer" | "autumn";
type TimeOfDay = "morning" | "noon" | "evening" | "night";
interface Time {
  hour: number;
  minute: number;
  second: number;
}
interface Rotation {
  hourRotation: number;
  minuteRotation: number;
  secondRotation: number;
}

function findSeason(hemisphere: Hemisphere = "north"): Season {
  let seasons: Array<Season> = [];
  if (hemisphere === "north") {
    seasons = ["winter", "spring", "summer", "autumn"];
  } else {
    seasons = ["summer", "autumn", "winter", "spring"];
  }

  const month = new Date().getMonth() + 1;
  /* 0 if month is 1, 2
     1 if month is 3, 4, 5
     2 if month is 6, 7, 8
     3 if month is 9, 10, 11
     4 if month is 12
  */
  const seasonNum = Math.floor(month / 3);
  switch (seasonNum) {
    case 0:
    case 4:
      return seasons[0];
    case 1:
    case 2:
    case 3:
      return seasons[seasonNum];
    default:
      throw new Error(
        `Current month: ${month} somehow does not fall into 
        the range between 1-12!`
      );
  }
}

// returns the current time
function updateTime(): Time {
  const date = new Date();
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

// returns the current time of day
function findTimeOfDay(time: Time): TimeOfDay {
  const { hour } = time;
  if (6 < hour && hour < 12) {
    return "morning";
  } else if (12 <= hour && hour < 18) {
    return "noon";
  } else if (18 <= hour && hour < 24) {
    return "evening";
  } else {
    return "night";
  }
}

function findRotation(time: Time): Rotation {
  const { hour, minute, second } = time;
  return {
    hourRotation: ((hour % 12) + minute / 60) / 12,
    minuteRotation: (minute + second / 60) / 60,
    secondRotation: second / 60,
  };
}

/* Hour, Minute, Second hands */
interface HandProps {
  className?: string;
  rotation: number;
}
function Hand({ className, rotation }: HandProps) {
  return (
    <div
      className={`absolute
        w-[1%] aspect-[1/40] bg-black dark:bg-white
        ${className}`}
      style={{
        transformOrigin: "50% 100%",
        transform: `translate(0%, -50%) rotate(${rotation}turn)`,
      }}
    />
  );
}

function Ticks() {
  const hours = [...Array(12)].map((_, idx) => idx);
  return (
    <React.Fragment>
      {hours.map((hour) => (
        <div
          className="absolute
          w-[1%] aspect-[1/10] bg-slate-600 dark:bg-slate-500"
          style={{
            transformOrigin: "50% 450%",
            transform: `translate(0%, -400%) rotate(${hour / 12}turn)`,
          }}
        ></div>
      ))}
    </React.Fragment>
  );
}

/* main JSX component */
export default function Day9Level2() {
  const [time, setTime] = useState<Time>(updateTime());
  const [rotation, setRotation] = useState<Rotation>(findRotation(time));
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(findTimeOfDay(time));
  const [hemisphere, setHemisphere] = useState<Hemisphere>("north");
  const [season, setSeason] = useState<Season>(findSeason(hemisphere));

  const bgClass = {
    morning: "border-orange-600 dark:border-orange-400",
    noon: "border-blue-600 dark:border-blue-400",
    evening: "border-rose-600 dark:border-rose-400",
    night: "border-slate-600 dark:border-slate-400",
  };

  const borderClass = {
    winter: "bg-gray-200 dark:bg-gray-700",
    spring: "bg-lime-200 dark:bg-lime-800",
    summer: "bg-sky-200 dark:bg-sky-800",
    autumn: "bg-amber-200 dark:bg-amber-800",
  };

  /* clock logics */
  // update time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // update hands
  useEffect(() => {
    setRotation(findRotation(time));
  }, [time.second]);

  /* background logics */
  useEffect(() => {
    setSeason(findSeason(hemisphere));
  }, [hemisphere]);
  useEffect(() => {
    setTimeOfDay(findTimeOfDay(time));
  }, [time.hour]);

  return (
    <main>
      <h1>Day 9: Level 2</h1>
      <div id="level-2">
        <h2>
          Current time is: {time.hour.toString().padStart(2, "0")}:
          {time.minute.toString().padStart(2, "0")}:
          {time.second.toString().padStart(2, "0")}.
        </h2>
        <div id="set-hemisphere">
          <Button
            onClick={() => {
              hemisphere === "north"
                ? setHemisphere("south")
                : setHemisphere("north");
            }}
          >
            Change to {hemisphere === "north" ? "Southern" : "Northern"}{" "}
            Hemisphere
          </Button>
        </div>
        <div
          id="clock"
          className={`mx-auto my-8 w-[50%] aspect-square 
            ${bgClass[timeOfDay]}
            rounded-md border-4
            ${borderClass[season]}
            flex justify-center items-center relative`}
        >
          <Ticks />
          <div className="w-3 h-3 rounded-full bg-black dark:bg-white z-10"></div>
          <Hand
            rotation={rotation.hourRotation}
            className="w-[2%] aspect-[4/50]"
          />
          <Hand rotation={rotation.minuteRotation} />
          <Hand
            rotation={rotation.secondRotation}
            className="w-[0.5%] aspect-[1/80] bg-secondary-500"
          />
        </div>
      </div>
    </main>
  );
}
