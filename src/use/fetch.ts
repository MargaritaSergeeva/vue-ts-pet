import {Ref, ref} from 'vue'

type FetchRequest = () => Promise<void>;

interface UsableFetch<T> {
    request: FetchRequest,
    response: Ref< T | undefined | null>
}

export function useFetch<T>(url: RequestInfo, options?: RequestInit): UsableFetch<T> {
    const response = ref<Ref< T | undefined> | null>(null)
    const request = async () => {
        const res = await fetch(url, options)
        response.value = await res.json();
    }

    return {response, request}
}