// For Mission List
export interface MissionLaunch {
    mission_name: string;
    launch_year: string;
    details: string;
    flight_number: string;
    links: {
        mission_patch_small: string;
    };
}

// For Mission details
export interface Mission {
    flight_number: string;
    mission_name: string;
    launch_year: string;
    details: string;
    mission_patch_small: string;
    rocket: {
        rocket_name: string;
        rocket_type: string;
    };
}