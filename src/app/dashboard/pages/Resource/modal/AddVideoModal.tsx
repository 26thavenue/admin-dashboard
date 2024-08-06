'use client';
import { yupResolver } from '@hookform/resolvers/yup';
// import {
//   createCommunity,
//   getCommunities,
// } from 'components/redux/slices/communitiesSlice';
import { useAppDispatch, useAppSelector } from '../../../../../utils/hooks/redux-hooks'
import Button from '../../../../sharedcomponents/ui/button';
import FileUpload from '../../../../sharedcomponents/ui/fileUpload/FileUpload';
import { CustomUploadLabel } from '../../../../sharedcomponents/ui/fileUpload/customLabel';
// import CustomSelect from 'components/shared/ui/input/CustomSelect';
import { FormCheckbox } from '../../../../sharedcomponents/ui/input/FormCheckbox';
import { FormInput } from '../../../../sharedcomponents/ui/input/FormInput';
import { FormTextarea } from '../../../../sharedcomponents/ui/input/FormTextArea';
import { useEffect,  useState } from 'react';
import { useForm } from 'react-hook-form';
// import { IcreateCommunityForm } from 'types/communities';
import { IcreateVideoForm } from '../../../../../types/resources';
// import { createCommunityFormSchema } from 'components/pages/web-page/Kummnuity/communitySchema';
import { createVideoFormSchema } from '../../../../../utils/resourceSchema';
// import classNames from 'classnames';
// import Image from 'next/image';
// import { default as default_image } from 'public/images/default_image.png';
import TagInput from '../../../../sharedcomponents/ui/input/TagInput';
import { Switch, Typography } from '@material-tailwind/react';
import {
  addResource,
  getSingleResource,
  updateResource,
} from '../../../../../utils/redux/slices/resourceSlice';
import {
  lookupInterests
} from '../../../../../utils/redux/slices/lookupSlice';
import PageLoading from '../../../../sharedcomponents/ui/pageLoading';

interface iProps {
  close?: () => void;
  selectedRow?: any;
}
const AddVideoModal = ({ close, selectedRow }: iProps) => {
  // const [open, setOpen] = useState(1);
  const [isPublished, setIsPublished] = useState(false);
  const dispatch = useAppDispatch();

  const {
    addResource: { loading, success },
    updateResource: { loading: loadingUpdate, success: successUpdate },
    getSingleResource: { loading: loadingResource, data },
  } = useAppSelector(({ resources }) => resources);

  const {
    lookupInterests: { data: getInterests },
  } = useAppSelector(({ lookup }) => lookup);

  const [file, setFile] = useState<any>();
  const [tagsfield, setTagsfield] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<IcreateVideoForm>({
    resolver: yupResolver(createVideoFormSchema()),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  useEffect(() => {
    if (selectedRow?.id) dispatch(getSingleResource(selectedRow.id));
    else {
      reset({
        description: '',
        title: '',
        interests: '',
        resourceLink: '',
      });
      setTagsfield([]);
      setIsPublished(false);
      setFile({});
    }
  }, [dispatch, selectedRow]);

  useEffect(() => {
    dispatch(lookupInterests());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      reset({
        description: data?.description,
        title: data?.title,
        interests: data?.interests,
        resourceLink: data?.resourceLink,
      });
      setTagsfield(data.tags);
      setIsPublished(data?.isPublished);
    }
  }, [data]);

  useEffect(() => {
    if (success || successUpdate) {
      reset({
        description: '',
        title: '',
        interests: undefined,
        resourceLink: '',
      });
      setTagsfield([]);
      setIsPublished(false);
      setFile({});
      close && close();
    }
  }, [success, dispatch, reset, close, successUpdate]);

  const onSubmit = handleSubmit(data => {
    const payload = {
      ...data,
      tags: tagsfield,
      isPublished,
      resourceType: 1,
      imageUpload: file?.type
        ? {
            mimeType: file?.type,
            base64Content: file?.base64String,
          }
        : undefined,
    };
    if (selectedRow?.id)
      dispatch(updateResource({ id: selectedRow.id, ...payload }));
    else dispatch(addResource(payload));
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b border-gray-200 p-4 text-base font-medium md:text-lg">
        Create a video resource
      </div>

      {loadingResource ? (
        <div className="flex items-center justify-center">
          <PageLoading />
        </div>
      ) : (
        <div className="px-8 py-4">
          <div
            className="flex h-72 w-full items-center rounded-lg border border-dashed border-gray-200 bg-white px-4 py-3.5 text-gray-500 "
            style={{ maxHeight: '300px' }} // Set max height here
          >
            <div className="relative h-full w-full">
              <img
                src={file?.img ?? data?.imageUrl }
                alt="Preview"
                className=" object-contain rounded-lg"
                
                style={{ maxHeight: '100%', maxWidth: '100%' }} // Set max height and width for the image
              />
            </div>
          </div>

          <FormInput<IcreateVideoForm>
            id="title"
            type="text"
            name="title"
            label="Resource title"
            placeholder="Enter resource title"
            className="my-2 w-full"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />

          <FormTextarea<IcreateVideoForm>
            id="description"
            name="description"
            label="Description"
            placeholder="Enter description"
            className="mb-2 w-full"
            register={register}
            rules={{ required: true }}
            errors={errors}
            rows={5}
          />

          <FormInput<IcreateVideoForm>
            id="resourceLink"
            type="text"
            name="resourceLink"
            label="Resource url"
            placeholder="eg.https://www.youtube.com/embed/oKr_qXVdVgs"
            className="mb-2 w-full"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />

          <div className="mt-3 grid max-w-md space-y-1">
            <FileUpload
              label="Resource image bananer"
              type="file"
              // setUploadingFile={setUploadingFile}
              customLabel={({ dragActive, onButtonClick }) =>
                CustomUploadLabel({ dragActive, onButtonClick, postion: 'row' })
              }
              isBase64
              maxFileSize={5}
              setFile={(value: any) => setFile(value)}
            />
          </div>

          <div className="mb-1 mt-5 text-sm text-gray-700">
            Select your interests
          </div>

          <div className="grid max-w-[38rem] space-y-1  md:grid-cols-2">
            {getInterests?.map((item, index) => (
              <FormCheckbox<IcreateVideoForm>
                key={index}
                id={item.name}
                value={item.name}
                name="interests"
                label={item.name}
                disabled={
                  watch('interests')?.length === 3 &&
                  !watch('interests').includes(item.name)
                }
                register={register}
                rules={{
                  required: false,
                }}
                errors={errors}
              />
            ))}
          </div>

          <div className="mt-3 w-full">
            <TagInput
              label="Tags"
              tags={tagsfield}
              id="registeredAccountEmails"
              setTags={setTagsfield}
              name="registeredAccountEmails"
              placeholder="Press comma after typing."
            />
          </div>

          <div className="mt-5">
            <Switch
              crossOrigin
              type="checkbox"
              label={
                <div>
                  <Typography 
                  placeholder={''}
                  color="blue-gray" 
                  className="text-sm font-medium">
                    Publish content
                  </Typography>
                </div>
              }
              id="custom-switch-component"
              ripple={false}
              className="h-full w-full checked:bg-[#2ec946]"
              containerProps={{
                className: 'w-11 h-6',
              }}
              checked={isPublished}
              onChange={value => setIsPublished(value.target.checked)}
              circleProps={{
                className: 'before:hidden left-0.5 border-none',
              }}
            />
          </div>
        </div>
      )}

      <div className="flex w-full border-t border-gray-200 px-8 pb-4">
        <Button
          className="ml-auto mt-4 flex h-9 items-center justify-center py-0 text-sm"
          btnType="withoutbg"
          border
          loading={loading || loadingUpdate}
          disabled={loading || loadingUpdate}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddVideoModal;