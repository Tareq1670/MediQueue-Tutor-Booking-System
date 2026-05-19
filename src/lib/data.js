export const homeData = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/home-tutors`,
    );
    const data = await res.json();
    return data;
};

export const getTutors = async (search = "", startDate = "", endDate = "") => {
    const query = new URLSearchParams();

    Object.entries({ search, startDate, endDate }).forEach(([key, val]) => {
        if (val) query.append(key, val);
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${query}`,
        {
            cache: "no-store",
        },
    );

    return res.json();
};
