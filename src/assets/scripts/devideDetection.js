import { deviceDetect, isMobile, isTablet } from 'react-device-detect'

// const iphoneMini = {width: }
const SamsungFoldClosed = { width: 320, height: 872 }
const SamsungFoldOpen = { width: 674, height: 842 }

export function deviceDetection() {
  /* Get device infos : */
  /* return : deviceType, Width, Height, Model, iOS */

  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const isFoldClosed = screenWidth === SamsungFoldClosed.width && screenHeight === SamsungFoldClosed.height
  const isFoldOpen = screenWidth === SamsungFoldOpen.width && screenHeight === SamsungFoldOpen.height
  const deviceInfos = window.navigator.userAgent

  if (isTablet) {
    if (isFoldClosed) {
      return 'closed'
    } else if (isFoldOpen) {
      return 'open'
    }
  }

  return deviceInfos
}