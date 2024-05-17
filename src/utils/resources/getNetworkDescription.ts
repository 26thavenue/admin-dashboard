export function getNetworkDescription(value: number): string {
  switch (value) {
    case 1:
      return "O2";
    case 2:
      return "Vodafone";
    case 3:
      return "EE";
    default:
      return "";
  }
}
