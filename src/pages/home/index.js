import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';
import VantIcon from '@vant/weapp/lib/icon';
import VantButton from '@vant/weapp/lib/button';
import VanNavBar from '@vant/weapp/lib/nav-bar';

const handleClick = () => {

}

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View className={styles.text}>
          <VanNavBar title="标题" left-text="返回" left-arrow>

          </VanNavBar>
          home
          <VantIcon name="close" class-prefix="custom-class-prefix" bindclick={handleClick} />
          <VantButton>1</VantButton>
        </View>
      </View>
    </View>
  );
};
