import { NativeModules } from 'react-native';

const intake = NativeModules.Nomahazebedasu;

export async function towebrnsignmalvsnrasbhAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
  return intake.futevalev(fields, bodyPlain);
}

export async function towebrnsignmalvsnrasbhMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
  return intake.tovavoqema(JSON.stringify(obj ?? {}));
}

export async function towebrnsignmalvsnrasbhSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
  const text = String(
    (await intake.jiqapiqonu(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => {
void towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds([24, 3, 2]);
return (text);
} };
}

/* obfuscation-batch:v1 */
function towebrnsignmalvsnrasbhtowebrnsignmalvsnrObfV1SumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 208;
  }
  return acc;
}
