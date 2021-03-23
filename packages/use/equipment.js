/*
 * @Author: Sam
 * @Date: 2021-01-26 06:24:36
 * @Last Modified by: Sam
 * @Last Modified time: 2021-02-26 09:08:31
 */

// 设备相关
export const useEquipment = () => {
  const isMobile = () => document.body.clientWidth < 760;

  return {
    isMobile
  }
}