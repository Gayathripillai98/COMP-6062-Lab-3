function triangleArea(base, height) {
    return (base * height) / 2;
  }
  
  console.log(triangleArea(3, 4));
  console.log(triangleArea(5, 7));
  
  
  function sphereVolume(radius) {
    return (4 / 3) * Math.PI * (radius ** 3);
  }
  
  console.log(sphereVolume(3));
  console.log(sphereVolume(5));
  
  
  function convertToMeters(distance, unit) {
    if (distance === 0 || unit === "m") {
      return distance;
    }
  
    switch (unit) {
      case "km":
        return distance * 1000;
      case "y":
        return distance * 0.9144;
      case "mi":
        return distance * 1609.34;
      default:
        return NaN;
    }
  }
  
  console.log(convertToMeters(50, "m"));
  console.log(convertToMeters(100, "y"));
  console.log(convertToMeters(1, "mi"));
  console.log(convertToMeters(1.234, "km"));
  
  
  function timeToSeconds(time) {
    const parts = time.split(":").map(Number);
  
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    } else {
      return parts[0];
    }
  }
  
  console.log(timeToSeconds("02:33:21"));
  console.log(timeToSeconds("00:04:51"));
  console.log(timeToSeconds("04:51"));
  console.log(timeToSeconds("00:13"));
  console.log(timeToSeconds("13"));
  