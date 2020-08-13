import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View className={styles.text}>
          coupon
        </View>
      </View>
    </View>
  );
};
