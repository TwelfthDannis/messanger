const formatAMPM = date => {
    const [hours, minutes] = [date.getHours() % 12 || 12, date.getMinutes()];
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
};
export default formatAMPM;