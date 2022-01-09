# React Device Detection Hook
Simple custom hook for device detection.

## Usage
```
const { device } = useDevice();
```
The device variable will be Object with the following format format:
```
device = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};
```
