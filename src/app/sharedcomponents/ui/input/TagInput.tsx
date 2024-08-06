import { useEffect, useLayoutEffect, useState } from 'react';
import './TagInput.css';
import { findKeyNumber } from '../../../../utils/common';
import { Input } from './Input';
import classNames from 'classnames';
import { notifyError } from '../../toast';

interface tags {
  tags: any;
  setTags: any;
  placeholder?: string;
  label: string;
  id: string;
  name: string;
  validate?: boolean;
}
const TagInput = ({
  tags,
  id,
  setTags,
  placeholder,
  label,
  name,
  validate = true,
}: tags) => {
  const [tagData, setTagData] = useState(tags);
  const [fieldState, setFieldState] = useState<boolean>();
  const [text, setText] = useState<string>('');
  const removeTagData = (indexToRemove: number) => {
    setTags([
      ...tagData.filter((_: any, index: any) => index !== indexToRemove),
    ]);
  };

  const addTagData = (event: any) => {
    if (event?.target?.value !== '' && event?.target?.value?.length > 2) {
      const duplicate = tags.find(
        (item: any) => item === event.target.value.replace(/,/g, '')
      );

      if (duplicate) return notifyError('Error', 'Duplicate');

      setTags([...tagData, event.target.value.replace(/,/g, '')]);
      setTagData([...tagData, event.target.value.replace(/,/g, '')]);

      event.target.value = '';
    }
  };

  useEffect(() => {
    setText('');
  }, [text]);

  useLayoutEffect(() => {
    if (tagData?.length === 0) {
      setFieldState(false);
    } else {
      setFieldState(true);
    }
    setTagData(tags);
  }, [tagData, tags]);

  return (
    <div className="tag-input">
      <ul className="tags ">
        {tagData?.map((tag: any, index: any) => (
          <li key={index} className="tag bg-japa-orange gap-2">
            <span className="tag-title">{tag}</span>
            <span
              className="text-japa-orange !m-0 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-white p-2 !leading-none"
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <Input
        label={label}
        id={id}
        name={name}
        aria-invalid={!fieldState && text !== ''}
        className={classNames({
          'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50':
            validate && ((!fieldState && text !== '') || !tagData?.length),
        })}
        isError={validate && ((!fieldState && text !== '') || !tagData?.length)}
        onKeyUp={event => {
          const key = findKeyNumber(event.currentTarget.value);
          const keyW = event.key;
          [188, 13, 44].includes(key) || keyW === ','
            ? addTagData(event)
            : null && event.preventDefault();
        }}
        onChange={e => setText(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default TagInput;