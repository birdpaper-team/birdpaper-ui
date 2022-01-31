/**
 * @Author: Sam
 * @Date: 2021-01-26 06:24:36
 * @Last Modified by: Sam
 * @Last Modified time: 2022-01-11 19:30:47
 */

// 设备相关
export const useEquipment = () => {
  const isMobile = () => document.body.clientWidth < 760;

  return {
    isMobile
  }
}