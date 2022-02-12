import { DownArrowHintSVG, DownArrowSVG } from '../../assets/index';
import { MainColors } from '../../common';
import { Text } from '../../components';
import React, { memo } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import useComponent from './hooks/useComponent';
import { Props } from './models';
import styles from './styles';

const CustomItemPicker = memo((props: Props) => {
  const {
    value,
    options = [],
    width,
    titleWidth = 85,
    title,
    disabled,
    height,
    style,
    required,
    boxWrapperStyle,
  } = props;
  const { onChangeItem } = useComponent(props);
  const {
    boxWrapperView,
    wrapperView,
    iconWrapper,
    titleText,
    textStyle,
    titleWrapper,
    starSvg,
  } = styles;

  return (
    <RNPickerSelect
      value={value?.value}
      items={options}
      disabled={disabled}
      placeholder={{}}
      style={{
        inputAndroidContainer: {
          width  , height , ...style
        }
      }}
      // pickerProps={{ mode: "dropdown" }}
      // drop down or dialog
      onValueChange={onChangeItem}>
      <View style={[wrapperView, { width, height }]}>
        <View
          style={[
            // { width: !title && width , height: !title && height }, 
            style,
            boxWrapperView,
            boxWrapperStyle,
            { borderColor: disabled ? MainColors.hint : MainColors.primary },
          ]}>
          {value !== undefined && (
            <Text
              color='black'
              numberOfLines={1}
              style={[
                textStyle,
                { color: disabled ? MainColors.hint : MainColors.text },
              ]}>
              {value.label}
            </Text>
          )}
          <View style={iconWrapper}>
            {disabled ? (
              <DownArrowHintSVG width={15} height={15} />
            ) : (
              <DownArrowSVG width={15} height={15} />
            )}
          </View>
        </View>
        {title !== undefined && <View style={[titleWrapper, { width: titleWidth }]}>
          <Text size="medium" style={titleText}>
            {title}
          </Text>
        </View>}
      </View>
    </RNPickerSelect>
  );
});

export default CustomItemPicker;
