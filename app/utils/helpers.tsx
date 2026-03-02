export const getBadgeColor = (genre: string) => {
  const normalized = genre?.toLowerCase();

  switch (normalized) {
    case "action":
      return "badge--action";
    case "comedy":
      return "badge--comedy";
    case "drama":
      return "badge--drama";
    case "horror":
      return "badge--horror";
    case "sci-fi":
      return "badge--sci-fi";
    case "adventure":
      return "badge--adventure";
    default:
      return "badge--default";
  }
};
