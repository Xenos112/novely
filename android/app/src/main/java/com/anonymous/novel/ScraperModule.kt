package com.anonymous.novel

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import sources.Sources

class ScraperModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "ScraperModule"

    @ReactMethod
    fun fetchPopular(source: String, page: Int, promise: Promise) {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val result = withContext(Dispatchers.IO) {
                    Sources.fetchPopularJSON(source, page.toLong())
                }
                
                if (!result.success) {
                    promise.reject("FETCH_ERROR", result.error)
                    return@launch
                }

                val novels = Arguments.createArray()
                val jsonArray = JSONArray(result.data)
                for (i in 0 until jsonArray.length()) {
                    val obj = jsonArray.getJSONObject(i)
                    novels.pushMap(parseAbstractNovel(obj))
                }
                promise.resolve(novels)
            } catch (e: Exception) {
                promise.reject("FETCH_ERROR", e.message, e)
            }
        }
    }

    @ReactMethod
    fun fetchNovelInfo(source: String, novelId: String, promise: Promise) {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val result = withContext(Dispatchers.IO) {
                    Sources.fetchNovelJSON(source, novelId)
                }
                
                if (!result.success) {
                    promise.reject("FETCH_ERROR", result.error)
                    return@launch
                }

                val obj = JSONObject(result.data)
                val novel = Arguments.createMap().apply {
                    putString("id", obj.getString("ID"))
                    putString("source", obj.getString("Source"))
                    putString("title", obj.getString("Title"))
                    putString("description", obj.getString("Description"))
                    putString("cover", obj.getString("Cover"))
                    putString("author", obj.getString("Author"))
                    putString("status", obj.getString("Status"))
                    
                    val genresArray = Arguments.createArray()
                    val genresJson = JSONArray(obj.getString("Genres"))
                    for (i in 0 until genresJson.length()) {
                        genresArray.pushString(genresJson.getString(i))
                    }
                    putArray("genres", genresArray)
                }
                promise.resolve(novel)
            } catch (e: Exception) {
                promise.reject("FETCH_ERROR", e.message, e)
            }
        }
    }

    @ReactMethod
    fun fetchChapters(source: String, novelSlug: String, promise: Promise) {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val result = withContext(Dispatchers.IO) {
                    Sources.fetchChaptersJSON(source, novelSlug)
                }
                
                if (!result.success) {
                    promise.reject("FETCH_ERROR", result.error)
                    return@launch
                }

                val chapters = Arguments.createArray()
                val jsonArray = JSONArray(result.data)
                for (i in 0 until jsonArray.length()) {
                    val obj = jsonArray.getJSONObject(i)
                    chapters.pushMap(parseChapter(obj))
                }
                promise.resolve(chapters)
            } catch (e: Exception) {
                promise.reject("FETCH_ERROR", e.message, e)
            }
        }
    }

    @ReactMethod
    fun fetchChapterContent(source: String, chapterUrl: String, promise: Promise) {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val result = withContext(Dispatchers.IO) {
                    Sources.fetchChapterContentJSON(source, chapterUrl)
                }
                
                if (!result.success) {
                    promise.reject("FETCH_ERROR", result.error)
                    return@launch
                }

                val obj = JSONObject(result.data)
                val content = Arguments.createMap().apply {
                    putString("title", obj.getString("Title"))
                    putString("content", obj.getString("Content"))
                    putString("language", obj.getString("Language"))
                }
                promise.resolve(content)
            } catch (e: Exception) {
                promise.reject("FETCH_ERROR", e.message, e)
            }
        }
    }

    @ReactMethod
    fun search(source: String, query: String, promise: Promise) {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val result = withContext(Dispatchers.IO) {
                    Sources.searchJSON(source, query)
                }
                
                if (!result.success) {
                    promise.reject("SEARCH_ERROR", result.error)
                    return@launch
                }

                val novels = Arguments.createArray()
                val jsonArray = JSONArray(result.data)
                for (i in 0 until jsonArray.length()) {
                    val obj = jsonArray.getJSONObject(i)
                    novels.pushMap(parseAbstractNovel(obj))
                }
                promise.resolve(novels)
            } catch (e: Exception) {
                promise.reject("SEARCH_ERROR", e.message, e)
            }
        }
    }

    private fun parseAbstractNovel(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        return Arguments.createMap().apply {
            putString("id", obj.getString("ID"))
            putString("source", obj.getString("Source"))
            putString("title", obj.getString("Title"))
            putString("cover", obj.getString("Cover"))
        }
    }

    private fun parseChapter(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        return Arguments.createMap().apply {
            putString("id", obj.getString("ID"))
            putString("title", obj.getString("Title"))
            putString("url", obj.getString("URL"))
        }
    }
}
