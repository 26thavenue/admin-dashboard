import classNames from 'classnames';
import { ArrowLeft } from 'iconsax-react';
import React, { FC } from 'react';
import { useNavigate} from 'react-router-dom';
import Button from './button';
import PageLoading from './pageLoading';

interface IpageLayout {
  title: string;
  count?: number;
  showCount?: boolean;
  children: React.ReactNode;
  content?: React.ReactNode;
  containerClassName?: string;
  layoutClassName?: string;
  showInfo?: boolean;
  showBackBtn?: boolean;
  isLoading?: boolean;
  hideTitle?: boolean;
}
const PageLayout: FC<IpageLayout> = ({
  title,
  children,
  count,
  showCount,
  content,
  containerClassName,
  layoutClassName,
  showInfo = true,
  showBackBtn,
  isLoading,
  hideTitle,
}) => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <section className="flex h-full px-4">
      <div
        className={classNames(
          'relative mx-auto mb-6 flex h-full w-full flex-wrap bg-white',
          { [layoutClassName as string]: layoutClassName }
        )}
      >
        <div className="bg-gray-25 top-0 z-30 flex w-full items-center justify-between px-4 py-4 md:sticky md:px-8 ">
          <h4 className="font-duplicate-san flex items-center text-lg font-medium text-gray-900">
            {title}
            {showCount && (
              <span className="bg-primary-50 ml-2 flex items-center justify-center rounded-full px-2 py-1 text-xs">
                {count}
              </span>
            )}
          </h4>
          <div className="flex justify-center gap-4">{content}</div>
        </div>
        <div className="w-full px-4 pb-10 pt-4 lg:px-8 ">
          <div className="w-full">
            <div className="relative mx-auto h-full min-w-0 max-w-full">
              {showBackBtn && (
                <Button
                  className="shadow-xs my-4 flex h-11 items-center justify-center py-0 text-sm"
                  btnType="withoutbg"
                  border
                  animate={false}
                  onClick={() => back()}
                >
                  <ArrowLeft className="text-primary-700 mr-2 h-5 w-5" /> Go
                  back
                </Button>
              )}
              <div
                className={classNames('mx-auto flex w-full pt-4', {
                  [containerClassName as string]: containerClassName,
                })}
              >
                {isLoading ? (
                  <div className="flex h-[60vh] w-full items-center justify-center">
                    <PageLoading />
                  </div>
                ) : (
                  children
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLayout;