import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';

interface formValues {
  name: string;
  studyPeriod: number | null;
  weeklySessionTime: number | null;
  maxMember: number | null;
  studyTime: number | null;
  description: string;
}

export default function CreateStudy() {
  const {
    register,
    handleSubmit,

    watch,
    formState: { errors, isSubmitting },
  } = useForm<formValues>({
    defaultValues: {
      name: '',
      description: '',
      weeklySessionTime: null,
      studyPeriod: null,
      maxMember: null,
      studyTime: null,
    },
    mode: 'onChange',
  });

  const description = watch('description') || ''; // 추적

  //제네릭 SubmitHandler<T> 는 “제출 데이터가 정확히 T”임을 보장
  const onSubmit: SubmitHandler<formValues> = (data) => {
    console.log(data);
  };

  return (
    //FormProvider -> 파일 분리, 컴포넌트 분리할 때 쓰인다.
    <div>
      <header className='p-6 text-center text-2xl font-bold'>스터디룸 생성하기 </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        id='studyform'>
        <FieldSet // 무슨 역할? : 주제의 필드를 묶는 “섹션 컨테이너”. 내부적으로 <fieldset>를 써서 접근성(a11y)가 생긴다. (필수는 아님)
          className='px-8'
          disabled={isSubmitting} // FieldSet에서 한 번에 설정할 수 있다.
        >
          <FieldGroup // 무슨 역할? 해당 섹션의 여러 Field를 수직 스택 + 간격으로 정렬하는 레이아웃 래퍼. 별도의 의미/접근성 역할은 없음(일반적으로 div와 유사).
            className='gap-2'>
            <FieldSeparator className='' />

            <FieldLabel
              htmlFor='name' // 역할: Input의 id와 연결된다. 라벨 클릭하면 해당 id를 가진 인풋에 포커스. (RHF의 name과는 별개)
            >
              스터디룸 이름
            </FieldLabel>
            <Field
              data-invalid={!!errors.name}
              className=''>
              <Input
                id='name' // 역할: 동일한 htmlFor를 가진 Label과 연결된다.
                aria-invalid={!!errors.name}
                type='text'
                {...register('name', { required: '공부 안하세요?' })}
              />
              {errors.name && (
                <FieldError
                  errors={[errors.name]}
                  //errors.name의 name은 register("name") 또는 Controller name="name"에서 결정
                />
              )}
            </Field>

            <FieldLabel htmlFor='studyPeriod'>스터디 진행 기간</FieldLabel>
            <Field data-invalid={!!errors.studyPeriod}>
              <InputGroup>
                <InputGroupInput
                  type='number'
                  inputMode='numeric'
                  id='studyPeriod'
                  aria-invalid={!!errors.studyPeriod}
                  {...register('studyPeriod', {
                    required: '공부 안하세요?',
                    valueAsNumber: true,
                    min: { value: 2, message: '2주는 공부하세요.' },
                    max: { value: 100, message: '무리하지 마세요.' },
                  })}
                />
                <InputGroupAddon align='inline-end'>
                  <InputGroupText>주</InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {errors.studyPeriod && <FieldError errors={[errors.studyPeriod]} />}
            </Field>

            <FieldLabel htmlFor='weeklySessionTime'>주간 세션 횟수</FieldLabel>
            <Field data-invalid={!!errors.weeklySessionTime}>
              <InputGroup>
                <InputGroupInput
                  id='weeklySessionTime'
                  // 숫자만: 모바일 키패드 + 데스크톱 키다운 필터
                  type='number'
                  inputMode='numeric' // 숫자 키패드 띄워준다.
                  aria-invalid={!!errors.weeklySessionTime}
                  {...register('weeklySessionTime', {
                    max: { value: 20, message: '그렇게 많이 안 할 거면서...' },
                    min: { value: 1, message: '한 번은 공부하셔야죠...' },
                    valueAsNumber: true,
                    required: '공부 안하세요?',
                  })}
                />
                <InputGroupAddon align='inline-end'>
                  <InputGroupText>번</InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {errors.weeklySessionTime && (
                //FieldError 컴포넌트는 여러 메시지를 받을 수 있게 배열을 받도록 설계.
                <FieldError errors={[errors.weeklySessionTime]} />
              )}
            </Field>

            <FieldLabel htmlFor='studyTime'>세션 당 목표 공부량</FieldLabel>
            <Field data-invalid={!!errors.studyTime}>
              <InputGroup>
                <InputGroupInput
                  type='number'
                  inputMode='numeric'
                  id='studyTime'
                  aria-invalid={!!errors.studyTime}
                  {...register('studyTime', {
                    required: '공부 안하세요?',
                    valueAsNumber: true,
                    min: { value: 30, message: '30분은 공부하세요.' },
                    max: { value: 300, message: '5시간 넘게 하신다고요?' },
                  })}
                />
                <InputGroupAddon align={'inline-end'}>
                  <InputGroupText>분</InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {errors.studyTime && <FieldError errors={[errors.studyTime]} />}
            </Field>

            <FieldLabel htmlFor='maxMember'>최대 인원</FieldLabel>
            <Field data-invalid={!!errors.maxMember}>
              <InputGroup>
                <InputGroupInput
                  type='number'
                  inputMode='numeric'
                  id='maxMember'
                  aria-invalid={!!errors.maxMember}
                  {...register('maxMember', {
                    required: '공부 안하세요?',
                    valueAsNumber: true,
                    min: { value: 1, message: '혼자라도 하세요.' },
                    max: { value: 30, message: '그렇게 많이 모여서 뭐하시게요.' },
                  })}
                />
                <InputGroupAddon align={'inline-end'}>
                  <InputGroupText>명</InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {errors.maxMember && <FieldError errors={[errors.maxMember]} />}
            </Field>

            <FieldLabel htmlFor='description'>스터디 소개글</FieldLabel>
            <Field data-invalid={!!errors.description}>
              <InputGroup>
                <InputGroupTextarea
                  className='max-h-25'
                  id='description'
                  placeholder='100글자 이내로 써주세요.'
                  maxLength={100} // 최대 100글자
                  aria-invalid={!!errors.description}
                  {...register('description', {
                    required: '소개글을 써주세요.',
                  })}
                />
                <InputGroupAddon align={'block-end'}>
                  <InputGroupText className='ml-auto'>{`${description.length}/100`}</InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {errors.description && <FieldError errors={[errors.description]} />}
            </Field>

            <Button
              form='studyform'
              type='submit'>
              제출
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

/*
1. data-invalid -> aria-invalid 흐름

  Field에서 data-invalid 속성은 에러가 있을 때 true로 Field 래퍼에 주고, 그 상태가 CSS로 children에 전파된다.
children 중 실제 입력 컨트롤들(예: Input, Textarea, SelectTrigger, Checkbox, Radio, Switch 등) 은 같은 에러 불리언을 aria-invalid로 받아야 하며,
FieldLabel, FieldDescription, FieldError(그리고 테마가 지정한 기타 요소들) 은 aria-invalid가 없어도 부모의 [data-invalid] 덕분에 에러 스타일이 적용된다.

2. FieldSet 과 FieldGroup은 필수가 아니다.
    - FieldSet은 접근성을 챙길 수 있다.
    - FieldGroup은 레이아웃 + 스타일링 편하게 하라고 있는 UI 컴포넌트이다. 수평/수직 정렬, 간격, 테마에 맞는 스타일 등은 잘 맞춰준다.
    - 두 개 다 써도 되고, 하나만 써도 된다.

3. Field는 하위 Field요소들에게 data-invalid를 전파한다. Label에는 에러 스타일링을 주기 싫어서 Field밖으로 뺐다.    
*/
