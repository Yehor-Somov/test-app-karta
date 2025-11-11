const getLocalTime = (isoDate: string | undefined): string => {
    if (!isoDate) return "";

    return new Date(isoDate).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatDateTime(isoDate: string | undefined): string {
    if (!isoDate) return "";

    return new Date(isoDate).toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

export { getLocalTime, formatDateTime };
