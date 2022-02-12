import {ComponentInput} from '../models';

const useComponent = (componentInput: ComponentInput) => {
  const {options = [], onChangeValue} = componentInput;

  const onChangeItem = (value: string, index: number) => {
    onChangeValue && onChangeValue({value, label: options[index].label});
  };

  return {
    onChangeItem,
  };
};

export default useComponent;
