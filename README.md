# React Device Detection Hook
Simple custom hook for device detection.

## Usage
```
const { device } = useDevice();
```
The device variable will be Object of this format:
```
device = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};
```
