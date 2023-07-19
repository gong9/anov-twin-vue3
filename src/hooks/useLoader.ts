import type { Loader } from 'three'

interface LoaderType<T> extends Loader {
  load(
    url: string,
    onLoad?: (result: T) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): unknown
  loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<T>
}

 type LoaderProto<T> = new (...args: any) => LoaderType<T extends unknown ? any : T>

const useLoader = <T extends LoaderProto<T>>(Loader: T, url: string) => {
  const proto = new Loader()

  return new Promise((resolve) => {
    proto.load(
      url,
      (data) => {
        if (data.scene)
          resolve(data)
      },
    )
  })
}

export default useLoader
